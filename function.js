const axios = require('axios');

 Function to get a buffer from a URL
const getBuffer = async (url, options = {}) => {
  try {
    const response = await axios({
      method: 'GET',
      url: url,
      headers: {
        'DNT': 1,
        'Upgrade-Insecure-Request': 1
      },
      ...options,
      responseType: 'arraybuffer'
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Function to get group admins from an array of members
const getGroupAdmins = (members) => {
  const admins = [];
  for (let member of members) {
    if (member.admin !== null) {
      admins.push(member.id);
    }
  }
  return admins;
};

// Function to generate a random number with a suffix
const getRandom = (suffix) => {
  return '' + Math.floor(Math.random() * 10000) + suffix;
};

// Function to format large numbers with suffixes
const h2k = (number) => {
  const suffixes = ['', 'K', 'M', 'B', 'T', 'P', 'E'];
  const order = Math.floor(Math.log10(Math.abs(number)) / 3);
  if (order === 0) return number;
  const suffix = suffixes[order];
  const scaledNumber = number / Math.pow(10, order * 3);
  const formattedNumber = scaledNumber.toFixed(1);
  return formattedNumber.replace(/\.0$/, '') + suffix;
};

// Function to check if a string is a URL
const isUrl = (str) => {
  const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/gi;
  return regex.test(str);
};

// Function to format JSON data with indentation
const Json = (data) => {
  return JSON.stringify(data, null, 2);
};

// Function to convert milliseconds to a readable format
const runtime = (milliseconds) => {
  milliseconds = Number(milliseconds);
  const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

  let result = '';
  if (days > 0) result += days + (days === 1 ? ' day, ' : ' days, ');
  if (hours > 0) result += hours + (hours === 1 ? ' hour, ' : ' hours, ');
  if (minutes > 0) result += minutes + (minutes === 1 ? ' minute, ' : ' minutes, ');
  if (seconds > 0) result += seconds + (seconds === 1 ? ' second' : ' seconds');
  return result;
};

// Function to sleep for a given amount of milliseconds
const sleep = async (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

// Function to fetch JSON data from a URL
const fetchJson = async (url, options = {}) => {
  try {
    const response = await axios({
      method: 'GET',
      url: url,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
      },
      ...options
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
};
