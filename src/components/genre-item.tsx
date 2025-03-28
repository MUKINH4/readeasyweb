import { Star } from "lucide-react";
import Icon from "./icon";
import CrudDropdown from "./crud-dropdown";

export default function GenreItem({ genre }: GenreProps) {
    return (
        <div className="flex justify-between">
            <div className="flex gap-x-2 text-white">
                <Icon name={genre.icon}/>
                <span>{genre.name}</span>
            </div>
            <div className="flex gap-x-3">
                <Star color="white"/>
                <CrudDropdown id={genre.id} />
            </div>
        </div>
    )
}