import Image from "next/image";
import Link from "next/link";

type Params = {
  params: {
    photoId: string;
  };
};

type Date = {
  year: string;
  month: string;
  day: string;
};

const Photo = async ({ params: { photoId } }: Params) => {
  const formatDate = (string: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(string).toLocaleDateString([], options);
  };

  const getPhotoData = async () => {
    const res = await fetch(
      `https://api.unsplash.com/photos/${photoId}/?client_id=8rdssbrJIi6CqglgutZRTRTc4TbR5bp3Mm62JvJ5gLM`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch user data");
    }

    return res.json();
  };

  const photoData: Photo = await getPhotoData();

  return (
    <>
      <div className="container photo-content p-10">
        <Link href="/">
          <button className="btn btn-primary my-6">Go Back</button>
        </Link>

        <div className="grid grid-cols-2 gap-4">
          <div>
            {photoData && (
              <Image
                src={photoData?.urls.full}
                alt={photoData?.description}
                width={500}
                height={300}
              />
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">{photoData?.user.name}</h2>
            <Image
              src={photoData?.user.profile_image.medium}
              alt={photoData?.user.name}
              width={80}
              height={80}
              className="rounded-full"
            />
            <p className="mt-3">
              <strong>Bio :</strong> {photoData?.user.bio}
            </p>
            <p>
              <strong>Unsplash Account :</strong>{" "}
              <a className="text-blue-600" href={photoData?.user.links.html}>
                {photoData?.user.links.html}
              </a>
            </p>
            <p>
              {" "}
              <strong>Total Likes :</strong>
              {photoData?.user.total_likes}
            </p>
            <p>
              {" "}
              <strong>Total Photos :</strong>
              {photoData?.user.total_photos}
            </p>
            <p>
              {" "}
              <strong>Total Collections :</strong>
              {photoData?.user.total_collections}
            </p>
            <p>
              {" "}
              <strong>Total Photos :</strong>
              {photoData?.user.total_photos}
            </p>

            <p>
              {" "}
              <strong> Description : </strong>
              {photoData?.description}
            </p>
            <p>
              {" "}
              <strong>Created : </strong>
              {formatDate(photoData?.created_at)}
            </p>
            <p>
              {" "}
              <strong>Last Update : </strong>
              {formatDate(photoData?.updated_at)}
            </p>
            <p>
              {" "}
              <strong>Total Views : </strong>
              {photoData?.views}
            </p>
            <p>
              {" "}
              <strong>Downloads : </strong>
              {photoData?.downloads}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photo;
