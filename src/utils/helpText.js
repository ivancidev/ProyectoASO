const helpTextShares = {
  title: `Shares`,
  description: `This is a list of already configured shares, whether they are enabled or disabled, and some basic information about them.
    
    A share can be enabled or disabled. A disabled share is not accessible, but its configuration is still written into the configuration file. So the share can be later enabled again. 
    Some of the shares are special. For example, the share Homes is a special system share for accessing home directories of users. The system shares can be hidden from the table by selecting Do Not Show System Shares in the Filter menu.
    Use Add to add a new share, Edit to modify already existing share, and Delete to remove the information about a share.
    Allow Users to Share Their Directories enables members of the group in Permitted Group to share directories they own with other users. For example, users for a local scope or DOMAIN\Users for a domain scope. The user also must make sure that the file system permissions allow access.
    With Maximum Number of Shares, limit the total amount of shares that may be created.
    To permit access to user shares without authentication, enable Allow Guest Access.`,
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
    description: `These options allow setup of the identity of the server and its primary role in the network. 
    The base settings set up the domain and the server role. Backup Domain Controller and Primary Domain Controller allow Windows clients to log in to a Windows domain. The backup controller uses another domain controller for validation. The primary controller uses its own information about users and their passwords. If the server should not participate as a domain controller, choose the Not a DC value. 
    If you want to use Microsoft Windows Internet Name Service (WINS) for name resolution, check Use WINS for Hostname Resolution. 
    Optionally, set a Server NetBIOS Name. The NetBIOS name is the name the server uses in the SMB network.
    Advanced Settings provides access to detailed configuration, user authentication sources, and expert global settings.`,
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

export { helpTextShares, helpTextStartUp, helTextIdentity, helpTextAdd, helpTextEdit };
