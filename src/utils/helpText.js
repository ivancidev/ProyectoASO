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
  title: `Service configuration`,
  description: `Current status
    Displays the current status of the service.
    After writing configuration
    Allow to change the service status immediately after accepting the changes. Available options depend on the current state. The Keep current state special action leaves the service state untouched.
    After reboot
    Let choose if service should be started automatically on boot. Some services could be configured on demand, which means that the associated socket will be running and start the service if needed. 
    Firewall Settings
    To open the firewall to allow access to the service from remote computers, set Open Port in Firewall.
    To select interfaces on which to open the port, click Firewall Details.
    This option is available only if the firewall is enabled.`,
};

const helTextIdentity = {
    title: `Identity`,
    description: `These options allow setup of the identity of the server and its primary role in the network. 
    The base settings set up the domain and the server role. Backup Domain Controller and Primary Domain Controller allow Windows clients to log in to a Windows domain. The backup controller uses another domain controller for validation. The primary controller uses its own information about users and their passwords. If the server should not participate as a domain controller, choose the Not a DC value. 
    If you want to use Microsoft Windows Internet Name Service (WINS) for name resolution, check Use WINS for Hostname Resolution. 
    Optionally, set a Server NetBIOS Name. The NetBIOS name is the name the server uses in the SMB network.
    Advanced Settings provides access to detailed configuration, user authentication sources, and expert global settings.`,
}

export { helpTextShares, helpTextStartUp, helTextIdentity };
