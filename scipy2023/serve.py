from http.server import SimpleHTTPRequestHandler, HTTPServer
from pathlib import Path
import make


hostName = "localhost"
serverPort = 8000




ROOT = Path(__file__).parent


class MyServer(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/index.svg" or self.path == "/":
            make.do_includes()
            self.send_response(200)
            self.send_header("Content-type", "image/svg+xml")
            self.end_headers()

            self.wfile.write((ROOT / "index.svg").read_bytes())
        else:
            super().do_GET()


if __name__ == "__main__":
    webServer = HTTPServer((hostName, serverPort), MyServer)
    print("Server started http://%s:%s" % (hostName, serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")
