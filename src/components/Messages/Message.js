const Message = ({ content, own, type, width, height, user }) => {

    return (
      <p className={`message py-1 flex md:px-6 px-1 ${own ? "justify-end" : "justify-start"} `}>
        {!own && 
        <span className={`logo mr-2 text-xl md:text-3xl text-white flex items-center bg-blue-600 rounded-full text-center px-4
        ${type === "text" ? "my-auto" : "max-h-12"}
        `}>
        {user.name.charAt(0).toUpperCase()}
    </span>
        }
        <span className={`py-2  text-xl  md:text-3xl rounded-2xl 
          ${type === "text" ? "px-6"  : "px-2"}
          ${own ? "bg-sky-400 text-white " : "bg-slate-300 " }`}>
          {type === "text" ? content : type === "image" ? <Image src={content} alt="image"  width={width} height={height} className="rounded-md"  /> : null}
        </span>
      </p>
    );
  };

  export default Message;