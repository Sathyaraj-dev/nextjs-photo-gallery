import Image from "next/image";
import Link from "next/link";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const getPhotosData = async () => {
  const res = await fetch(
    "https://api.unsplash.com/photos/?client_id=8rdssbrJIi6CqglgutZRTRTc4TbR5bp3Mm62JvJ5gLM&per_page=16"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }

  return res.json();
};

const Photos = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  //console.log(searchParams?.search);

  const searchPhotosData = async () => {
    const res = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=8rdssbrJIi6CqglgutZRTRTc4TbR5bp3Mm62JvJ5gLM&per_page=16&query=${searchParams?.search}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch search data");
    }

    return res.json();
  };

  const photosData: Photos[] = await getPhotosData();

  let searchPhotos: any;

  if (searchParams) {
    searchPhotos = await searchPhotosData();
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="rounded-box md:columns-4 gap-4 m-10">
          {searchPhotos &&
            searchPhotos?.results?.map((photo: any) => (
              <div
                className="overflow-hidden group relative mb-5"
                key={photo.id}
              >
                <Link href={`/photos/${photo.id}`}>
                  <div className="capitalize font-sans opacity-0 h-24 w-full z-10 flex justify-center items-center bg-blue-700 bg-opacity-60 absolute text-white p-3 -bottom-2 group-hover:opacity-100">
                    {photo.alt_description}
                  </div>
                  <Image
                    src={photo.urls.small}
                    alt={photo.alt_description}
                    width={300}
                    height={250}
                    style={{ width: "100%" }}
                    className="object-cover h-auto max-w-full group-hover:scale-125 transition duration-500 cursor-pointer"
                  />
                </Link>
              </div>
            ))}

          {!searchParams &&
            photosData?.map((photo: any) => (
              <div
                className="overflow-hidden group relative mb-5"
                key={photo.id}
              >
                <Link href={`/photos/${photo.id}`}>
                  <div className="capitalize font-sans opacity-0 h-24 w-full z-10 flex justify-center items-center bg-blue-700 bg-opacity-60 absolute text-white p-3 -bottom-2 group-hover:opacity-100">
                    {photo.alt_description}
                  </div>
                  <Image
                    src={photo.urls.small}
                    alt={photo.alt_description}
                    width={300}
                    height={250}
                    style={{ width: "100%" }}
                    className="object-cover h-auto max-w-full group-hover:scale-125 transition duration-500 cursor-pointer"
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Photos;
