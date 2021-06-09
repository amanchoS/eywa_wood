const server_url = 'http://localhost:4000/api';

export const getTasks = async () => {
    const response = await fetch(`${server_url}/tasks`);
    if(!response.ok) {
        throw new Error('Can not get the tasks lists');
    }
    return await response.json();
};

export const getTask = async (id) => {
    const response = await fetch(`${server_url}/tasks/${id}`);
    if(!response.ok) {
        throw new Error('Can not get the task');
    }
    return await response.json();
};

export const addTask = async (title) => {
      const response = await fetch(`${server_url}/tasks`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          isCompleted: false,
        }),
      });
      if(!response.ok) {
        throw new Error('Can not add the task');
    }
};

export const setCompletedTask = async (id, isCompleted) => {
    const response = await fetch(`${server_url}/tasks/${id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isCompleted,
        }),
      });
      if(!response.ok) {
        throw new Error('Can not modify the task');
    }
};

export const deleteTask = async (id) => {
    const response = await fetch(`${server_url}/tasks/${id}`, {
        method: 'delete',
    });
    if(!response.ok) {
        throw new Error('Can not delete the task');
    }
};