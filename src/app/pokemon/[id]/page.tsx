import { fetchPokemonData } from '@/apis/pokemon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import type { Metadata } from "next";
import { Pokemon } from '@/app/types/pokemon';

const PokemonDetailPage = async ({ params }: { params: { id: string } }) => {
    const pokemon = await fetchPokemonData(params.id);
    
    // 구조분해할당
    const { korean_name, order, weight, types, abilities, moves } = pokemon;

    return (
        <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
            <Link href={'/'} >
                <button className="mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200">뒤로가기</button>
            </Link>
            <h1 className="text-3xl font-bold mb-4 text-center">{korean_name}</h1>
            <div className="flex flex-col items-center md:flex-row md:items-start">
                <Image
                    src={pokemon.sprites.front_default}
                    width={150}
                    height={150}
                    alt="pokemon_image"
                    className="mb-4 md:mb-0"
                />
                <div className="ml-0 md:ml-6">
                    <p className="text-lg"><span className="font-bold">이름:</span> {korean_name}</p>
                    <p className="text-lg"><span className="font-bold">도감번호:</span> {pokemon.id}</p>
                    <p className="text-lg"><span className="font-bold">키:</span> {order}m <span className="font-bold">무게:</span> {weight}kg</p>
                    <p className="text-lg"><span className="font-bold">타입:</span> {types.map((type: any) => type.type.korean_name).join(', ')}</p>
                    <p className="text-lg"><span className="font-bold">특성:</span> {abilities.map((ability: any) => ability.ability.korean_name).join(', ')}</p>
                    <p className="text-lg"><span className="font-bold">기술:</span> {moves.map((moves: any) => moves.move.korean_name).join(', ')}</p>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetailPage;
