import axiosClient from "../../axios";


export const getAirports = async () => {
    axiosClient.get('/airports')
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        })
};


export const getFlights = async (from, to) => {
    const response  = await axiosClient.post('/searchflights',{
        fromCode: from,
        toCode :to,
        departure: "2023-04-04T06:35:37.724Z",
        return : "2023-04-04T06:35:37.724Z"
      })
    .then((res) => {
        return res.data;
    })
    .catch((err) => {
        return err;
    });
    return response;
  };
