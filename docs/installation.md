import SdkInstallation from './\_sdk-installation.mdx';

# Install Nillion SDK and Tools

## Mac and Linux Guide

<SdkInstallation/>

## Windows Guide

Today Nillion SDK binaries are available for Mac and Linux. In order to install Nillion on a Windows machine, you'll need to first complete a 5 minute WSL developer environment setup.

### WSL (Windows Subsystem for Linux) developer environment setup

The Windows Subsystem for Linux (WSL) lets developers install a Linux distribution (such as Ubuntu, OpenSUSE, Kali, Debian, Arch Linux, etc) and use Linux applications, utilities, and Bash command-line tools directly on Windows, unmodified, without the overhead of a traditional virtual machine or dualboot setup. [Follow the WSL installation](https://learn.microsoft.com/en-us/windows/wsl/setup/environment#get-started) steps below

#### 1. Run the install command

From your terminal, install WSL

```
wsl --install
```

This downloads and installs the Ubuntu Linux distribution.

#### 2. Restart your computer

A reboot is required after installing Ubuntu.

#### 3. After restarting, open Ubuntu and create an account

To open an Ubuntu terminal, search for the app from Start. Open Ubuntu and follow the prompts to set up your Linux username and password.

#### 4. Update and upgrade packages

```
sudo apt update && sudo apt upgrade
```

#### 5. Install the Visual Studio Code Remote Development Extension

Visual Studio Code Remote Development allows you to use a container, remote machine, or the Windows Subsystem for Linux (WSL) as a full-featured development environment. [Install the Visual Studio Code Remote Development Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack).

#### 6. Open a new Ubuntu terminal and Install Nillion

Now that your WSL development environment is set up, you can install the Nillion SDK and Tools.

:::info
Make sure to install Nillion within **a new Ubuntu terminal.** Either open a Ubuntu terminal, or from your Windows PowerShell terminal, first run Ubuntu:

```
ubuntu
```

:::

<SdkInstallation />

🎉 Great work! You've set up a WSL environment and installed Nillion. Before running a nillion command like `nillion-devnet` or `nada`, make sure you are in a WSL environment by first running `ubuntu`
