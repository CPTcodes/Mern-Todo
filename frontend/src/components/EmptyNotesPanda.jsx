import React from "react";

const EmptyNotesPanda = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[60vh] overflow-hidden text-center">
      
      {/* Snow */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ❄
          </span>
        ))}
      </div>

      {/* Panda */}
      <div className="panda">
        <div className="ear left" />
        <div className="ear right" />
        <div className="face">
          <div className="eye left" />
          <div className="eye right" />
          <div className="nose" />
        </div>
        <div className="body" />
      </div>

      {/* Text */}
      <h2 className="mt-6 text-xl font-semibold text-base-content">
        No notes yet!
      </h2>
      <p className="text-base-content/70">
        Your panda is bored… create a note 🐾
      </p>

      {/* Styles */}
      <style>{`
        .panda {
          position: relative;
          width: 120px;
          animation: jump 2s infinite ease-in-out;
        }

        .ear {
          position: absolute;
          width: 30px;
          height: 30px;
          background: black;
          border-radius: 50%;
          top: -10px;
        }

        .ear.left { left: 0; }
        .ear.right { right: 0; }

        .face {
          width: 120px;
          height: 100px;
          background: white;
          border-radius: 50%;
          position: relative;
        }

        .eye {
          position: absolute;
          width: 20px;
          height: 20px;
          background: black;
          border-radius: 50%;
          top: 35px;
        }

        .eye.left { left: 30px; }
        .eye.right { right: 30px; }

        .nose {
          position: absolute;
          width: 12px;
          height: 8px;
          background: black;
          border-radius: 50%;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
        }

        .body {
          width: 100px;
          height: 80px;
          background: black;
          border-radius: 50%;
          margin: 0 auto;
        }

        @keyframes jump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .snowflake {
          position: absolute;
          top: -10px;
          font-size: 14px;
          opacity: 0.8;
          animation: snow linear infinite;
        }

        @keyframes snow {
          to {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  );
};

export default EmptyNotesPanda;
