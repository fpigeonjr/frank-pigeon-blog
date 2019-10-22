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

> This is how I setup windows 10 for a modern web development using WSL2. 
> I am coming from macOS so my goal is to get as close as a setup as I would setup my macBook Pro for web development.

## Windows Updates

- Insiders Build - Fast
- run all updates

## Debloat Script

link script on github

https://github.com/Sycnex/Windows10Debloater

- yes debloat
- remove all preinstalled
- no to pdf
- no to oneDrive
- unpin all items

No to reboot

## Privacy Settings

- General Tab -> all off
- Speech -> off
- Inking -> off
- Diagnostics -> off
- Activity History -> off
- Location -> off
- Background Apps -> off
- App Diagnostics -> off

## Power Settings

- High Performance

## Disable File Indexing

- Turn off for Hard Disks.(may take a while)

## Reboot

## Dev Setup

## Package Manager

- [Chocolately](https://chocolatey.org/) is the winner!

`choco install all my apps`

## WSL 2

Enable WSL running PS Script

Run both one at a time, then reboot

Set WSL default to WSL2

Get linux distro of choice via MS Store, had some issues via chocolatey.

fetch command worked ok, but store was seemless.

On launch, set userid and passwd.

Update Ubuntu

## vscode Remote - WSL extension

## Ubuntu setup

- oh-my-zshell
- node, eslint, gatsby-cli, create-react-app, zsh-syntax-highlighting, nvm-zsh

## Pin Linux mount to File Explorer

## Resources

[Chris Titus Tech - Setting up the perfect Windows 10 Installation | Faster, Lighter, and Functional](https://youtu.be/nVy4GAtkh7Q)

[MS Docs for Setting up Node w/ WSL2](https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2)
