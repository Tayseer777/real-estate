module.exports = ({env}) =>({
    upload: {
        config: {
          provider: 'aws-s3',
          providerOptions: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            region: env('AWS_REGION'),
            params: {
              Bucket: env('AWS_BUCKET'),
            },
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
      },
        "google-map-picker": {
            config: {
            apiKey: env("GOOGLE_PUBLIC_KEY"), // required
            default_center: { lat: 54.106438, lng: 11.556940 }, // required
            favorites_places: [
                {
                title: "Berlin",
                coordinates: { lat: 52.518536, lng: 52.518536 },
                },
                {
                title: "Zurich",
                coordinates: { lat: 47.384168, lng: 8.526831 },
                },
                {
                title: "Oslo",
                coordinates: { lat: 59.911002, lng: 10.756167},
                },
                {
                title:"Amman",
                coordinates:{lat: 31.953931, lng: 35.910754}
                }
            ],
            },
        },
  });
//31.956255, 35.854308
//31.953931, 35.910754