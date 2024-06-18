const helpTextShares = {
  title: `Shares`,
  description: `This is a list of already configured shares, whether they are enabled or disabled, and some basic information about them.
    
    A share can be enabled or disabled. A disabled share is not accessible, but its configuration is still written into the configuration file. So the share can be later enabled again. 
    Some of the shares are special. For example, the share Homes is a special system share for accessing home directories of users. The system shares can be hidden from the table by selecting Do Not Show System Shares in the Filter menu.
    Use Add to add a new share, Edit to modify already existing share, and Delete to remove the information about a share.`,
};

const helpTextStartUp = {
  title: `Service Configuration`,
  description: `Current status
    Displays the current status of the service.
    After writing configuration
    Allow to change the service status immediately after accepting the changes. Available options depend on the current state. The Keep current state special action leaves the service state untouched.
    After reboot
    Let choose if service should be started automatically on boot. Some services could be configured on demand, which means that the associated socket will be running and start the service if needed.`,
};

const helTextIdentity = {
    title: `Identity`,
    description: `This option for Workgroup or Domain Name allows you to change the name of the workgroup in the [global] section of the samba configuration file.`,
};

const helpTextUser = {
  title: `Samba Users`,
  description: `In this section, you can see a list of the users that have been added in Samba, this will be displayed within a table. 
  Additionally, it provides the options to add a new user and delete an existing user, the changes will be shown in the table.`,
};

const helpTextAdd ={
  title: `Add a New Share`,
  description: `Here, enter the basic information about a share to add.
  Share Name is used for accessing the share from clients. Share Description describes the purpose of the share.
  There are two types of shares. A Printer share is presented as a printer to clients. A Directory share is presented as a network disk. Share Path must be entered for a directory share.
  If Read-Only is checked, users of a service may not create or modify files in the service's directory.
  Inherit ACLS can be used to ensure that if default ACLs exist on parent directories, they are always honored when creating a subdirectory.
  With Expose Snapshots selected, Samba exposes snapshots created by Snapper for access and manipulation by CIFS/SMB clients. This option is only available if Samba offers Snapper support, and the Share Path corresponds to a Btrfs backed Snapper configuration subvolume.
  Relevant permissions must also be granted, see Samba's vfs_snapper(8) man page for further details.
  Utilize Btrfs Features instructs Samba to take advantage of features specific to the Btrfs filesystem. This option is only available if Samba offers Btrfs support, and the Share Path is a Btrfs subvolume. See Samba's vfs_btrfs(8) man page for further details.`,
};

const helpTextEdit = {
  title: `Edit a Share`,
  description: `Here, fine-tune the options of a share.
  Use Add to add a new configuration option, Edit to modify an existing option, and Delete to delete an option. `,

}

export { helpTextShares, helpTextStartUp, helTextIdentity, helpTextAdd, helpTextEdit, helpTextUser };
