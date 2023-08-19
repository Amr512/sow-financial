const LeftMenu = () => {
  const menuData = [
    {
      icon: '/assets/Mint.png',
      content: 'Mint NFTs',
      active: true,
    },
    {
      icon: '/assets/material-symbols_trophy.png',
      content: 'Rewards',
    },
    {
      icon: '/assets/Seeding.png',
      content: 'Purchase SOW',
    },
    {
      icon: '/assets/ion_pricetag.png',
      content: 'SOW Price',
    },
    {
      icon: '/assets/fluent_web-asset-16-filled.png',
      content: 'Assets',
    },
  ];
  return (
    <>
      <div className='rounded-[10px] w-auto mr-[20px]'>
        {menuData.map((data, i) => {
          const { content, icon, active } = data;
          return (
            <div
              className={`flex gap-[10px] py-[20px] ps-[26px] border-[#FFFFFF40]  first:border-b-0 last:rounded-b-[10px] ${
                active
                  ? 'bg-[#35185F] rounded-t-[10px]'
                  : 'border-b-[0.2px] border-r-[0.2px] border-l-[0.2px] '
              }`}
              key={i}
            >
              <img src={icon} alt='menu-icon' />
              <p className='text-[20px] font-[600]'>{content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LeftMenu;
