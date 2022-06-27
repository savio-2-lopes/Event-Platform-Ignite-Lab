import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";
import { Button } from "./Button";

export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-2-[1100px] max-h-[60vh] aspect-video"></div>
      </div>

      <div className="p-8 max-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold ">
              Aula 01 - Abertura do Ignite Lab
            </h1>

            <p className="mt-4 text-gray-200 leading-relaxed">
              Na aula 1 você vai entender quais são as oportunidades que você
              pode ter se especializando em ReactJS e porque essa é a decisão
              mais inteligente pra sua carreira no momento! E também vamos dar
              início ao projeto que vamos desenvolver nessa semana: uma
              plataforma de conteúdos em vídeo. Bora codar!
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="https://github.com/savio-2-lopes.png"
                alt="Avatar"
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  Savio Lopes
                </strong>
                <span className="text-gray-200 text-sm block">
                  Graduando em Análise e Desenvolvimento de Sistemas
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Button href="#" type="primary" />
            <Button href="#" type="secondary" />
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap=6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          {/* Segundo */}

          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap=6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Walpappers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize sua
                máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
