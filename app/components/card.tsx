import { useNavigate} from "@remix-run/react";
import { Card as FCard, Button } from "flowbite-react";
import { AiOutlinePlus } from 'react-icons/ai';

export function Card() {

  const navigate = useNavigate();

  return (
    <FCard className="max-w-sm bg-white">
      <div className="flex flex-col items-center pb-6">
        <img
          alt="Bonnie image"
          height={96}
          src="./logo.png"
          width={96}
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Adicionar equipa</h5>        
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <Button className="border border-agLightBlue-300 bg-agLightBlue-100 text-black focus:ring-4 focus:ring-agLightBlue-100 enabled:hover:bg-agLightBlue-200 px-5 mx-2" 
          onClick={() => navigate('players')}>
            <AiOutlinePlus className="h-6 w-6 text-agLightBlue-900"/>
          </Button>
        </div>
      </div>
    </FCard>
  );
}
