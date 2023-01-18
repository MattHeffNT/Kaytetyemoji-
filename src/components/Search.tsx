import { ChangeEvent, useEffect, useRef } from 'react';
import { IonSearchbar } from '@ionic/react';

interface SearchProps {
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    emojiArray: any;
}

const Search: React.FC<SearchProps> = ({ setSearchText, emojiArray }) => {
    const searchBar: any = useRef();
    useEffect(() => {
        if (searchBar.current) {
            // listen for search bar input then call function
            searchBar.current.addEventListener('ionInput', handleInput);
        }
        function handleInput(event: React.MouseEvent<HTMLInputElement, ChangeEvent>) {
            const query = (event.target as HTMLInputElement).value.toLowerCase();
            const rows = Array.from(emojiArray.current.children);
            setSearchText(query);
            requestAnimationFrame(() => {
                rows.forEach((col: any) => {
                    const emoji = col.firstElementChild;
                    const shouldShow = emoji.id.toLowerCase().indexOf(query) > -1;

                    // change container and emoji display status depending on whether search input detected
                    if (shouldShow) {
                        // reset gridded emojis to default style
                        col.classList.remove('resetGrid');
                    } else {
                        col.classList.add('resetGrid');
                    }
                });
            });
        }
        return () => {
            searchBar.current.removeEventListener('ionInput', handleInput);
        };
    }, [emojiArray, setSearchText]);

    return (
        <IonSearchbar
            ref={searchBar}
            // OnIonChange={(e) => setSearchText(e.detail.value!)}
            onIonChange={(e) => setSearchText(e.detail.value!)}
            placeholder="Search"
            debounce={1000}
        />
    );
};

export default Search;
