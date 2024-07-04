import Container from "@/components/Container";


const Gallery = () => {

  return (
    <Container>
      <h1 className="text-center text-5xl font-bold my-2">Galllery</h1>
      <p className="text-center font-semibold text-slate-500">
        Some of our previous Activities snapshot!
      </p>
      <div className="my-10 w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-3 gap-8 columns-3">
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/2d2BVyp/img4.jpg"
            alt=""
          />
        </div>
        <div >
          <img
            className="rounded-lg"
            src="https://i.ibb.co/dWwvKSg/img6.jpg"
            alt=""
          />
        </div>
        <div >
          <img
            className="rounded-lg"
            src="https://i.ibb.co/cccJtng/img33.jpg"
            alt=""
          />
        </div>
        <div >
          <img
            className="rounded-lg lg:max-h-[543px] w-full"
            src="https://i.ibb.co/P11wtqq/img3.jpg"
            alt=""
          />
        </div>
        <div >
          <div className="mb-8">
            <img
              className="rounded-lg"
              src="https://i.ibb.co/VtBLvQR/img5.jpg"
              alt=""
            />
          </div>
          <div >
            <img
              className="rounded-lg"
              src="https://i.ibb.co/JkHdL8L/img44.jpg"
              alt=""
            />
          </div>
        </div>
        <div >
          <img
            className="rounded-lg lg:max-h-[543px] w-full"
            src="https://i.ibb.co/GVvhZZG/img342.jpg"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
