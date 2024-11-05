export default function Information({ articletitle, admin,}) {
    return (
      <div className="space-y-4">
        {/* Judul */}
        <h1 className="mt-5 pt-serif font-semibold text-[40px] max-w-[40rem]">
          {articletitle}
        </h1>
  
        {/* Admin Info */}
        <div className="text-sm text-secondary-gray nunito">
          <p>{admin}</p>
        </div>
      </div>
    );
  }
  