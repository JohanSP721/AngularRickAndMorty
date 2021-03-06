export interface DataResponse
{
	characters: APIResponse<Character[]>;
	episodes: APIResponse<Episode[]>;
}

export interface APIResponse<E>
{
	results: E;
}

export interface Episode
{
	name: string;
	episode: string;
}

export interface Character
{
	id:number;
	name: string;
	status: string;
	species: string;
	gender: string;
	image: string;
	isFavorite?: boolean;
}