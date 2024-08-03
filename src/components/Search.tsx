import { ChangeEvent, useEffect, useRef } from 'react';
import { IonSearchbar } from '@ionic/react';

interface SearchProps {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  emojiArray: any;
}

const Search: React.FC<SearchProps> = ({ setSearchText, emojiArray }) => {
  const searchBarRef = useRef<HTMLIonSearchbarElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // Handle home display based on input
  function handleInput(event: React.MouseEvent<HTMLInputElement, ChangeEvent>) {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    const rows = Array.from(emojiArray.current.children);
    setSearchText(query);
    requestAnimationFrame(() => {
      rows.forEach((col: any) => {
        //
        const emoji = col.firstElementChild;

        // search based on english/katetye name .. looks at emoji element id or alt
        const shouldShow = emoji.id.toLowerCase().indexOf(query) > -1;
        const englishEmoji = col.firstElementChild.alt.toLowerCase().indexOf(query) > -1;

        // status depending on whether search input detected
        if (shouldShow || englishEmoji) {
          // reset gridded emojis to default style
          col.classList.remove('resetGrid');
        } else {
          col.classList.add('resetGrid');
        }
      });
    });
  }

  useEffect(() => {
    const searchBar = searchBarRef.current;
    // null check
    if (searchBar) {
      // listen for search bar input then call function
      searchBar.addEventListener('ionInput', handleInput as any);
    }

    return () => {
      if (searchBar) {
        searchBar.removeEventListener('ionInput', handleInput as any);
      }
    };
  }, [searchBarRef, handleInput]);

  return (
    <IonSearchbar
      style={{ fontFamily: 'open sans' }}
      ref={searchBarRef}
      onIonChange={(e) => setSearchText(e.detail.value!)}
      placeholder="Search"
    />
  );
};

export default Search;
