"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Pokemon } from "@/app/types/pokemon";
import Link from "next/link";

const PokemonList = () => {
    const [pokemons, SetPokemons] = React.useState<Pokemon[]>([]);

    React.useEffect(() => {
        const pokemons = async () => {
            try {
                const respons = await axios.get('/api/pokemons');
                console.log(respons.data);
                SetPokemons(respons.data);
            } catch (error) {
                console.log(error);
            }
        }
        pokemons();
    }, [])

    return (
        <div className="grid grid-cols-6 gap-4">
            {pokemons.map((pokemon) => (
                <div key={pokemon.id} className="flex flex-col items-center border border-gray-300 p-2 rounded-lg">
                    <div className="flex flex-col items-center">
                        <div className="w-[100px] h-[100px]">
                            <Link href={`/pokemon/${pokemon.id}`} >
                                <Image
                                    src={pokemon.sprites.front_default}
                                    width={100}
                                    height={100}
                                    alt="pokemon_image" />
                            </ Link>
                        </div>
                        <div className="text-center mt-2">
                            {pokemon.korean_name} ({pokemon.name})
                            <p>도감번호: {pokemon.id}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PokemonList;