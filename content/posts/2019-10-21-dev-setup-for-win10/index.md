---
title: Developer Setup on Windows 10
slug: dev-setup-on-windows-10
date: 2019-10-21
language: en
imageTw: ./dev-setup-on-windows-10-tw.png
imageFb: ./dev-setup-on-windows-10-fb.png
cover: ./caspar-camille-rubin.jpg
generate-card: true
tags:
  - linux
  - windows
  - tech-guides
---

> This is how I setup windows 10 for a modern web development using Windows Subsystem for Linux (WSL2).
> I am coming from macOS so my goal is to get as close as a setup as I would setup my macBook Pro for web development.

<iframe width="560" height="315" src="https://www.youtube.com/embed/A0eqZujVfYU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Overview

1. Windows 10 Setup
1. Development Setup
   - Package Manager
   - App Launcher
   - WSL 2
   - Visual Studio Code - WSL extension
1. Moving Files from Windows to Linux

## Windows 10 Setup

### Windows Updates

At the time of this writing _WSL2_ is only available on the _Insiders Build-Fast_ so you will have to jump to the bleeding edge of the Microsoft updates path.

- Insiders Build - Fast
- run all updates

![windows insiders](./wininsider-fast.png)

### Debloat Script

Next you'll want to run the [Windows10 Debloat Script](https://github.com/Sycnex/Windows10Debloater) which will remove a bunch bloat and make Windows snappier.

<!-- TODO: Add Paul's gif -->

![win10debloatgif](./Win10DebloatRight.gif)

<p style="font-size: smaller">- gif created by <a href="https://azraelsdomain.tech/" > Paul Castillo</a></p>

> 👋bye bye Candy Crush

[https://github.com/Sycnex/Windows10Debloater](https://github.com/Sycnex/Windows10Debloater)

- yes debloat
- remove all preinstalled
- no to pdf
- no to oneDrive
- unpin all items

> ❗Say No to reboot, there are more tweaks to go

### Privacy Settings

👀Since we don't Windows spying on us, we'll go ahead and turn off all the following provacy settings.

![privacy](./privacy.png)

- General Tab -> all off
- Speech -> off
- Inking -> off
- Diagnostics -> off
- Activity History -> off
- Location -> off
- Background Apps -> off
- App Diagnostics -> off

### Power Settings

Get more turbo-boost from your PC by turning on the high performance setting in your power settings.

![power settings](./power.png)

- High Performance

### Disable File Indexing

![files](./files.png)

Warning, this takes a while but will make your system even snappier.

- Turn off for Hard Disks.(may take a while)

### Reboot

> 🤣Time for a reboot, what did you expect...it's still Windows.

## Development Setup

### Package Manager

![chocolatly](https://chocolatey.org/content/images/integrations-mockup.jpg)

Homebrew(Mac's package manager) alternative on Windows is called Chocolatey. So go ahead and get some `choco love`.

[Chocolatey - The Package Manager for Windows](https://chocolatey.org/)

`> choco install all my apps`

> 🛑Here you will want to install your client side apps, but not any development specific ones like git, node, or python. **We'll install those on the linux.**

Here are some of packages I use all the time:

- **firefox** - modern browser with great dev tools
- **microsoft-windows-terminal** - new terminal from Microsoft
- **cascadiacode** - monospaced coding font
- **7zip** - compression tool
- **vlc** - media player
- **vscode** - code editor
- **bitwarden** - password manager

🔥And you can install them all in one go like this:

<!-- TODO: check syntax -->

```bash

choco install firefox microsoft-windows-terminal cascadiacode 7zip vlc vscode bitwarden

```

### App Launcher

On Mac you have _spotlight_ to quickly search files, launch apps, confiure settings, etc.

The Windows alternative is called WoX.

> WoX is a launcher for Windows that simply works. It's an alternative to Alfred and Launchy. You can call it Windows omni-eXecutor if you want a long name.

![wox](https://camo.githubusercontent.com/9db33546d3a905a9ad915e0948d3ba3f47f57b64/687474703a2f2f692e696d6775722e636f6d2f4474784e424a692e676966)

[https://github.com/Wox-launcher/Wox](https://github.com/Wox-launcher/Wox)

Install it from chocolately:

`choco install wox`

### WSL 2

![terminal](./terminal.png)

[I wrote a separate blog post on this](/wsl2-on-windows10) but here are the cliff notes:

- Enable WSL running by PS Script
- Run both, one at a time, then reboot
- Set WSL default to WSL2
- Get linux distro of choice via MS Store, had some issues via chocolatey.
- (I went with Ubuntu)
- On launch, set userid and password.
- Update Ubuntu
- `sudo apt update && sudo apt upgrade -y`

### Visual Studio Code Remote - WSL extension

![vscode-extension](./remote-wsl.png)

You'll want this vscode extension to live in both worlds. It allows you to install linux-specific extensions from the Marketplace and spinning up your linux server seamlessly.

### Ubuntu setup

In linux, you'll want to install your developer tools like `git, node via nvm, python, etc.`

Once I have node setup I add these from npm.

`npm install -g eslint, gatsby-cli, create-react-app`

Honorable mentions

Make your termainl sexy with:

`zsh oh-my-zsh zsh-syntax-highlighting, nvm-zsh`

I could write another blog post on setting up your linux terminal.

## Pin Linux mount to File Explorer

A common problem is how to get files from your Windows client into the linux side.

> ie. You completed some awesome images from Photoshop and need to copy over to the linux code base.

Run the following command from your linux home directory or code directory on the linux terminal and it will open up File Explorer.

```bash

explorer.exe .

```

![explorer](./pinExplorer.png)

I recommend pinning this directory since you will want to move project assets from client side to linux.

## Final Thoughts

It's an exciting time to be a developer on Windows. With WSL2, you will get a great dev experience.

## Resources

[Chris Titus Tech - Setting up the perfect Windows 10 Installation | Faster, Lighter, and Functional](https://youtu.be/nVy4GAtkh7Q)

[MS Docs for WSL2](https://docs.microsoft.com/en-us/windows/wsl/wsl2-install)

[MS Docs for Setting up Node w/ WSL2](https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2)
