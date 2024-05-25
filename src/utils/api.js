const URL_BASE = import.meta.env.VITE_URL_BACKEND;

const fetchShares = async () => {
  try {
    const response = await fetch(`${URL_BASE}/shares`);

    if (!response.ok) {
      throw new Error("Not response network");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching shares:", error);
    throw error;
  }
};
const fetchStatus = async () => {
  try{
    const response = await fetch(`${URL_BASE}/start`);
    if(!response.ok){
      throw new Error("Not response network");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error nose donde pero error:", error);
    throw error;
  }
};

const fetchRename = async (oldName, newName) => {
  try {
    const response = await fetch(`${URL_BASE}/renameShare`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ oldName: oldName, newName: newName })
    });
    const data = await response.json();

    if (response.ok) {
      console.log(data.message);
    } else {
      console.log(data.message);
    }
    
  } catch (error) {
    console.error('Error:', error);
  }
};

const fetchLogin = async (user) => {
  try {
    const response = await fetch(`${URL_BASE}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error('Cant login');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error login:', error);
    throw error;
  }
};

const fetchWorkgroup = async () => {
  try {
    const response = await fetch(`${URL_BASE}/workgroup`);
    if (!response.ok) {
      throw new Error("Error fetching workgroup");
    }
    const data = await response.json();
    return data.workgroup;
  } catch (error) {
    console.error("Error fetching workgroup:", error);
    throw error;
  }
};

const updateWorkgroup = async (newWorkgroup) => {
  try {
    const response = await fetch(`${URL_BASE}/workgroup`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ workgroup: newWorkgroup }),
    });

    if (!response.ok) {
      throw new Error('Failed to update workgroup');
    }

    return await response.json();
  } catch (error) {
    throw new Error('Failed to update workgroup: ' + error.message);
  }
};

export { fetchShares, fetchRename, fetchLogin, fetchStatus, fetchWorkgroup, updateWorkgroup };


