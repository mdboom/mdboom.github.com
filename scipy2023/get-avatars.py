import json
from urllib.request import urlopen
import subprocess


with open("schedule.har") as fd:
    content = json.load(fd)


number = 0
for entry in content["log"]["entries"]:
    url = entry["request"]["url"]
    if "avatars" in url:
        filetype = url.split(".")[-1]
        subprocess.check_call(["curl", url, "--output", f"tmp.{filetype}"])
        subprocess.check_call(["convert", f"tmp.{filetype}", "-resize", "500x500^", f"avatars/image{number:04}.png"])
        number += 1
