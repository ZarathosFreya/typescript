import { Terrestre } from "./Terrestre";

export class Automovel extends Terrestre{

    private _cor: string;
    private _NumeroPortas: number;
    private _placa: string;
    private _marcha: number;


	constructor(capacidade: number, numeroRodas: number, velocidade: number, cor: string, NumeroPortas: number, placa: string, marcha: number) {
		super(capacidade, numeroRodas, velocidade)
        this._cor = cor;
		this._NumeroPortas = NumeroPortas;
		this._placa = placa;
		this._marcha = marcha;
	}

   
	public get cor(): string {
		return this._cor;
	}
	public get NumeroPortas(): number {
		return this._NumeroPortas;
	}
	public get placa(): string {
		return this._placa;
	}
	public get marcha(): number {
		return this._marcha;
	}
	public set cor(value: string) {
		this._cor = value;
	}
	public set NumeroPortas(value: number) {
		this._NumeroPortas = value;
	}
	public set placa(value: string) {
		this._placa = value;
	}
	public set marcha(value: number) {
		this._marcha = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`Cor: ${this._cor}`)
        console.log(`Numero de Portas: ${this._NumeroPortas}`)
        console.log(`Placa: ${this._placa}`)
        console.log(`Numeros de Marchas: ${this._marcha}`)
    }


}