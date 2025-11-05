import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {MapPin} from "lucide-react";
import {Label} from "@radix-ui/react-label";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";

export function SearchCepCard() {
    return (
        <>
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle>
                        <div className="flex items-center justify-center flex-col gap-5 pt-5">
                            <MapPin size={42} stroke='#3949ab'/>
                            <h1 className="text-4xl font-bold mt-4">Buscar Endereço</h1>
                            <p className="text-gray-600 mt-4">Digite seu CEP para encontrar o endereço completo</p>
                        </div>
                    </CardTitle>
                </CardHeader>
                    <CardContent>
                        <form>
                            <div className="gap-3 flex flex-col">
                                <div className="gap-1.5 flex flex-col">
                                    <Label htmlFor="cep" className="font-medium text-gray-700  text-base">CEP</Label>
                                    <Input
                                        required
                                        id="cep"
                                        placeholder="00000-000"
                                        type="text"
                                        className="h-14 w-full text-center font-medium text-gray-600 text-4xl placeholder:text-lg"
                                    />
                                    <p className="text-gray-600 text-sm">Digite 8 dígitos do CEP (com ou sem hífen)</p>
                                </div>
                                <div className=" flex flex-col justify-center items-center w-full mt-5">
                                    <Button size="lg" className="w-sm cursor-pointer text-base">Buscar</Button>
                                </div>
                            </div>

                        </form>
                    </CardContent>

            </Card>
        </>
    )
}