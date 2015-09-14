VirtualBox on Mac OS X
######################

:slug: virtualbox-on-mac-os-x
:date: 2013-08-29 09:33
:category: mac

I recently got a Mac Mini so I can start working on Macintosh-specific
issues with matplotlib.  Thanks again to Hans Petter Langtangen, the
Director of the Center for Biomedical Computing at `Simula
<http://home.simula.no/~hpl>`_ for his gracious donation that
supported the purchase.

One of the things I'd like to use this machine for is to test
installers in various environments -- a fresh install, or with
MacPorts, or Fink etc. -- to make sure the installers include
everything they need.  So I want to run Mac OS X in a virtual machine
that I can reset on a regular basis to a known state.  This is now
allowed by the licensing of OS X, as long as it's running on top of
genuine Apple hardware, and you create no more than 5 instances.

It's surprisingly hard to find information on installing Mac OS X in a
virtual machine.  Most of what Google finds is various hacks to run on
non-Apple hardware.  I, instead, want to do this legally.

Unfortunately, the Mac Mini came with no installation media, so you
can't just plug it in and install it in a virtual machine.  I thought,
ok, no problem -- I'll just pop over to the App Store and download it.
Unfortunately, to do that, Apple wanted to charge me $29.99 for
something I already own.

So next I looked at the recovery partition.  Parallels is reportedly
able to use the recovery partition directly to install in the virtual
machine.  However, I want to use VirtualBox, since it is open source,
what I'm familiar with on Linux, and, most importantly, because it can
be automated by vagrant.  After trying in vain to point VirtualBox at
the magic stuff in the recovery partition, I came upon a working
solution.  The following steps were done with Mountain Lion, and I
have no idea whether they are applicable to other releases.

- Grab an external USB drive and plug it in.  I think it needs to be
  at least the size of a double-layer DVD, or 8.5 GB.  This process
  will erase everything on it.

- Reboot into recovery mode, by holding down Command+R during boot.  (A word
  of advice to those new to Macs: wait until you hear the startup sound until
  you press the keys down, and hold them until the Apple logo disappears.
  Timing seems to be important here).

- I list of utilities will appear.  Open "Disk Manager" and
  repartition the external disk to have a "GUID" partition table with
  a single "HFS+" partition.

- Exit "Disk Manager" and then go to "Install OS X".  Install it to the
  external drive.

- When the installation is done, the system will reboot back into your "host"
  installation on the internal drive.  (I was surprised by this -- you may
  need to remove the USB drive to boot into the internal drive, but I didn't
  need to).

- The result is a folder on the external drive called "OS X Install
  Data".  Inside that folder is a disk image of the installer,
  `InstallESD.dmg`.  Copy this to your internal hard disk.  You can
  then remove the external USB drive, we're done with it.

- Unfortunately, there is still a small incompatibility with power
  management inside of VirtualBox that will cause the installer to
  hang during boot.  The kernel extension that handles CPU power
  management needs to be replaced.  I found the instructions for that
  `here <http://ntk.me/2012/09/07/os-x-on-os-x/>`_.  I'm paraphrasing
  it here, and only including instructions for Mountain Lion.

  - Download `InstallESD.dmg.tool
    <https://github.com/ntkme/InstallESD.dmg.tool>`_.

  - Download NullCPUPowerManagement.kext

  - Run the following command::

      ./InstallESD.dmg.tool -i InstallESD.dmg -o Output.dmg -- NullCPUPowerManagement.kext

- The `Output.dmg` is now a patched installer image that can be used
  to install OS X in VirtualBox.

- In VirtualBox, create a new virtual machine and use its default
  settings for an OS X guest.  Then, open the settings for the machine
  and go to the Storage tab.  Add a new CD/DVD device to the IDE bus
  (it must be IDE: SATA did not work for me), and select the
  Output.dmg from the file dialog.  Check the "Live CD/DVD" box.

- You now should be able to boot into the installer and install OS X
  within VirtualBox.  When the installer is ready to reboot, go back
  to VirtualBox settings and "eject" the virtual DVD before restarting.

Hopefully this will help others out.
