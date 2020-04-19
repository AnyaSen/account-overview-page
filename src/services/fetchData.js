import axios from "axios";

export const fetchData = async URL => {
  const headers = {
    "x-api-key": "ifGIBNTP5b4TVSbDylpST5vhabFJCSBJ7fqmMSKB"
  };

  try {
    const result = await axios(URL, { headers });

    return result.data;
  } catch (error) {
    throw Error(error);
  }
};
