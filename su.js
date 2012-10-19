var push_cwd = "/D /Q /K pushd \"" + WScript.Arguments(0);

var shell = new ActiveXObject("Shell.Application");

shell.ShellExecute("cmd.exe", push_cwd, "", "runas");
