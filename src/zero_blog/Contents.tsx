export type ContentsProps = {
  email?: string;
  phone?: string;
  habby?: string[];
  playlist?: string[];
};

const Contents = ({ email, phone, habby, playlist }: ContentsProps) => {
  return (
    <div>
      <div className="flex flex-col gap-5 font-handwriting text-2xl">
        {email ? <div>E-mail : {email}</div> : null}
        {phone ? <div>Phone : {phone}</div> : null}
        {habby
          ? habby.map((v) => {
              return <div>{v}</div>;
            })
          : null}
        {playlist
          ? playlist.map((v, i) => {
              return (
                <div className="font-chogoon text-xl">
                  {i + 1}. {v}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Contents;
