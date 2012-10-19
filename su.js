var push_cwd = "-k pushd \"" + WScript.Arguments(0);

var shell = new ActiveXObject("Shell.Application");

shell.ShellExecute(
        "PyCmd.exe",
        push_cwd,
        "",
        "runas"
        );
