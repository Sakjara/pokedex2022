import * as React from "react";
import { Pokemon } from "../types/data.model";
import pkball from "../assets/images/pokeball.png";
import pkballCol from "../assets/images/pokeball-color.png";
import { Link } from "react-router-dom";
import { badgeType } from "../utils/badgeType";
import { type } from "../utils/bgColortypeObject";
import { motion } from "framer-motion";


interface ICartProps {
  pokemon: Pokemon;
}
const cartImgVariants = {

  exit: {
    opacity: 0,
    transition: { type: "spring", duration: 1, delay: 0.5 },
  },
};

const Cart: React.FunctionComponent<ICartProps> = ({ pokemon }) => {
  const [isShown, setIsShown] = React.useState<boolean>(false);
  // Filtra el color de fondo según el pokemon.
  const pokemonType = type[pokemon.types[0].type.name];

  return (
    <div className="" id="PokeCart">
      <Link to={`${pokemon.name}`}>
        <div
          onMouseOver={() => setIsShown(true)}
          onMouseOut={() => setIsShown(false)}
          className={`relative cursor-pointer transition duration-200 
        ease-in transform sm:hover:scale-105 ${pokemonType} rounded overflow-hidden
            shadow-lg shadow-gray-300 w-60`} id="menuCarts"
        >
          <img
            src={isShown ? pkballCol : pkball}
            alt="pokeball"
            className={`${
              isShown
                ? "w-40 h-40 absolute  top-1 transition duration-200 ease-in transform opacity-60 "
                : "w-40 h-40 absolute top-1  opacity-20 "
            }`}
          />
          {pokemon.sprites.other.dream_world.front_default !== null ? (
            <motion.img
              variants={cartImgVariants}
              exit="exit"
              src={pokemon.sprites.other.dream_world.front_default}
              alt="pokemon"
              className="relative object-contain h-40 w-full pt-2 px-10 pl-18 scale-100	"
            />
          ) : pokemon.sprites.other.home.front_default !== null ? (
            <motion.img
              variants={cartImgVariants}
              exit="exit"
              src={pokemon.sprites.other.home.front_default}
              alt="pokemon"
              className="relative object-contain h-40 w-full pt-2 px-2 pl-20"
            />
          ) : (
            <motion.img
              variants={cartImgVariants}
              exit="exit"
              src={pokemon.sprites.front_default}
              alt="pokemon"
              className="relative object-contain h-40 w-full pt-2 px-2 pl-20"
            />
          )}

          <div className="fixed top-2 left-50 right-1 w-10 h-4 text-center ">
            <button type="submit" className="btn btn-primary bg-black-700	px-2 bg-zinc-900	py-0 rounded-2xl	
            font-bold text-xl text-white hover:bg-sky-600 duration-200 ease-in" id="botonAdd"> + </button>
          </div>
          <div className="absolute w-10 h-10 bottom-1 right-2 text-center mr-1">
            <img src={`${badgeType(pokemon.types[0].type.name)}`} alt="types" />
            <p className="absolute w-10 h-9 bottom-6 text-white font-normal">
              {pokemon.types[0].type.name}
            </p>
          </div>
          <div className="absolute w-10 h-10 bottom-16 right-2 text-center mr-1">
            {pokemon.types.length > 1 ? (
              <img
                src={`${badgeType(pokemon?.types[1]?.type?.name)}`}
                alt="types"
              />
            ) : null}
            <p className="absolute w-10 h-9 bottom-6 text-white font-normal">
              {typeof pokemon?.types ? pokemon?.types[1]?.type?.name : ""}
            </p>
          </div>
          <div className="px-2 pt-2 pb-2">
            <h1 className="font-bold text-xl mb-2 text-white">
              {pokemon.name}
            </h1>
          </div>
          <div className="flex flex-col ml-1 pl-1">
            <div className="flex items-center">
              <span
                className="bg-gray-200 rounded-full px-1 py-0 font-base text-xs
            mb-1"
              >
                Weight:
              </span>
              <p className="text-gray-200 px-1 mb-1 font-medium text-xs	">{pokemon.weight}</p>
            </div>
            <span className="rotate-90 w-5 left-12" />
            <div className="flex items-center ">
              <span
                className="bg-gray-200 rounded-full px-1 py-0 font-base text-xs
            mb-2"
              >
                Height:
              </span>
              <p className="text-gray-200 px-2 mb-2 font-medium text-xs">{pokemon.height}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
