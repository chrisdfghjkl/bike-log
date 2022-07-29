const FIREBASE_DOMAIN = 'https://bike-log-8f1e8-default-rtdb.firebaseio.com';

export async function getAllBikes() {
  const response = await fetch(`${FIREBASE_DOMAIN}/bikes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch bikes.');
  }

  const transformedBikes = [];

  for (const key in data) {
    const bikeObj = {
      id: key,
      ...data[key],
    };

    transformedBikes.push(bikeObj);
  }

  return transformedBikes;
}

export async function getSingleBike(bikeId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/bikes/${bikeId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch bike.');
  }

  const loadedBike = {
    id: bikeId,
    ...data,
  };

  return loadedBike;
}

export async function addBike(bikeData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/bikes.json`, {
    method: 'POST',
    body: JSON.stringify(bikeData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create bike.');
  }

  return null;
}

export async function addLog(requestData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/logs/${requestData.bikeId}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.logData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add log entry.');
  }

  return { logId: data.name }; //possible issue
}

export async function getAllLogs(bikeId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/logs/${bikeId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get log entries.');
  }

  const transformedLogs = [];

  for (const key in data) {
    const logObj = {
      id: key,
      ...data[key],
    };

    transformedLogs.push(logObj);
  }

  return transformedLogs;
}
