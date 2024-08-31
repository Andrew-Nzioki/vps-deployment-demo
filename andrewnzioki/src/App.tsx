import { Menubar } from 'primereact/menubar';
import { Card } from 'primereact/card';

function App() {
  // Define the menu items for the Menubar
  const items = [
    {
      label: 'Bio',
      icon: 'pi pi-home',
      url: '/'
    },
    {
      label: 'Experience',
      icon: 'pi pi-user',
      url: '/about'
    },
    {
      label: 'Tech stack',
      icon: 'pi pi-envelope',
      url: '/contact'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Center the Menubar items */}
      <div className="flex justify-center ">
        <Menubar
          model={items}
          className="text-white w-full max-w-4xl"
          start={<div />} // Empty start to center items
          end={<div />} // Empty end to center items
        />
      </div>
      <div className="flex-grow flex justify-center items-center">
        <Card className="w-full max-w-4xl p-6 shadow-lg rounded-lg" title="Andrew Nzioki">
          <div className="flex items-center">
            <img
              src="/path/to/profile-picture.jpg" // Replace with the actual path to your profile picture
              alt="Andrew Nzioki"
              className="w-24 h-24 rounded-full object-cover mr-6"
            />
            <p className="text-gray-700 text-lg">
              coming soon...
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
