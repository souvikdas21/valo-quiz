import React from 'react';
import img1 from '../assets/images/all_agents.jpg'
import img2 from '../assets/images/all_maps.jpg'
import img3 from '../assets/images/all_weapons.jpg'
import img4 from '../assets/images/all_mechanics.jpg'
import img5 from '../assets/images/all_story.jpg'

function Game() {
  const categories = [
    {
      title: 'Agents (Characters)',
      content: `
        Description of each agent
        Unique abilities
        Ultimate abilities
      `,
      image: img1
    },
    {
      title: 'Maps',
      content: `
        Map names and descriptions
        Key locations on each map
        Callouts commonly used by players
      `,
      image: img2
    },
    {
      title: 'Weapons',
      content: `
        List of weapons available in the game
        Damage, fire rate, and other statistics for each weapon
        Recoil patterns and spray control tips
      `,
      image: img3
    },
    {
      title: 'Game Mechanics',
      content: `
        Economy system (buying weapons, saving, etc.)
        Spike (bomb) mechanics
        Tactical aspects such as peeking, crosshair placement, and movement techniques
      `,
      image: img4
    },
    {
      title: 'Lore and Story',
      content: `
        Background story of Valorant
        Lore behind different agents and their affiliations
        Information about the conflict between the Radiant and the Kingdom
      `,
      image: img5
    }
  ];

  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {categories.map((category, index) => (
        <div key={index} className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
          <img
            src={category.image}
            alt={category.title}
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{category.title}</h1>
            <p className="mt-2 text-sm text-gray-300">
              {category.content}
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Play Now &rarr;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Game;
