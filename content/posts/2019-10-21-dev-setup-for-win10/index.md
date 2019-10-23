---
title: Developer Setup on Windows 10
slug: dev-setup-on-windows-10
date: 2019-10-21
language: en
imageTw: ./dev-setup-on-windows-10-tw.png
imageFb: ./dev-setup-on-windows-10-fb.png
cover: ./header-img.jpg
generate-card: true
tags:
  - linux
  - windows
  - tech-guides
---

> This is how I setup windows 10 for a modern web development using Windows Subsystem for Linux (WSL2). 
> I am coming from macOS so my goal is to get as close as a setup as I would setup my macBook Pro for web development.

<!-- TODO: Add scott hanselman's youtube -->

## Overview

1. Windows 10 Setup
2. Package Manager
3. WSL 2
4. Visual Studio Code
5. Moving Files

## Windows 10 Setup

### Windows Updates

At the time of this writing *WSL2* is only available on the *Insiders Build-Fast* so you will have to jump to the bleeding edge of the Microsoft updates path.

- Insiders Build - Fast
- run all updates

<!-- TODO: pic insiders track -->

### Debloat Script

Next you'll want to run the [Windows10 Debloat Script](https://github.com/Sycnex/Windows10Debloater) which will remove a bunch bloat and make Windows snappier.

<!-- TODO: Add Paul's gif -->

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

<!-- TODO: Privacy pic -->

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

<!-- TODO: Power setting pic -->

- High Performance

### Disable File Indexing

Warning, this takes a while but will make your system even snappier.

- Turn off for Hard Disks.(may take a while)

### Reboot

> 🤣Time for a reboot, what did you expect...its still Windows.

## Development Setup

### Package Manager

<!-- TODO: Choco pic -->

Homebrew(Mac's package manager) alternative on Windows is called Chocolatey. So go ahead and get some `choco love`.

- [Chocolatey - The Package Manager for Windows](https://chocolatey.org/)

`choco install all my apps`

> Here you will want to install your client side apps, but not any development specific ones like git, node, or python. **We'll install those on the linux.**

Here are the packages I use all the time:

* **firefox** - modern browser with dev tools
* **windowsterminal** - new terminal from Microsoft
* **cascadiafont** - monospaced coding font 
* **7zip** - compression tool
* **vlc player** - media player
* **visual studio code** - code editor
* **bitwarden** - password manager

🔥And you can install them all in one go like this:

<!-- TODO: check syntax -->

```bash

choco install firefox windowsterminal cascadiafont 7zip vlc vscode bitwarden

```

### WSL 2

<!-- TODO: bash  pic -->

[I wrote a separate blog post on this](/wsl2-on-windows10) but here are the cliff notes:

* Enable WSL running by PS Script
* Run both one at a time, then reboot
* Set WSL default to WSL2
* Get linux distro of choice via MS Store, had some issues via chocolatey. 
*   (I went with Ubuntu)
* On launch, set userid and password.
* Update Ubuntu
* `sudo apt update && sudo apt upgrade -y`

### Visual Studio Code Remote - WSL extension

<!-- TODO: vsocode pic -->

You'll want this vscode extension to live in both worlds. It allows you to install linux-specific extensions from the store and spinning up your linux server seamlessly.

### Ubuntu setup

In linux, you'll want to install your developer tools like git, node, python, etc. 

- zsh, node, and git

I like to customize my linux shell to zsh.

Once I have node setup I add these from npm.
-  eslint, gatsby-cli, create-react-app, zsh-syntax-highlighting, nvm-zsh

## Pin Linux mount to File Explorer

Run the following command from your root folder or code folder from linux and it will open up File Explorer. 

```bash

explorer.exe .

```

I recommend pinning these since you will want to move project assets from client side to linux. 

## Resources

[Chris Titus Tech - Setting up the perfect Windows 10 Installation | Faster, Lighter, and Functional](https://youtu.be/nVy4GAtkh7Q)

[MS Docs for Setting up Node w/ WSL2](https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2)
