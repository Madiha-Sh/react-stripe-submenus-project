import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {

  const { isSubmenuOpen, location, page: {page, links} } = useGlobalContext(); 
  const containerRef = useRef(null);
  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    setColumns('col-2');
    const { center, bottom } = location;
    const submenu = containerRef.current;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if(links.length > 3) {
      setColumns('col-4');
    }
    if(links.length === 3) { 
    setColumns('col-3');
    }
  }, [location, links])

  return (
    <aside className={isSubmenuOpen ? 'submenu show' : 'submenu'} ref={containerRef}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const {url, icon, label} = link;
          return (
            <div key={index}>
              <a href={url}>{icon} {label}</a>
            </div>
          )
        })}
      </div>
    </aside>
  );
}

export default Submenu;