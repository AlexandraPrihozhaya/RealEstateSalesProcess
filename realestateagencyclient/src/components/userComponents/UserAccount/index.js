import React, {useState} from 'react';
import { SSection, SNav, SUl, SLi, SDivContent } from './styled';
import UserInfoProfile from '../UserInfoProfile';
import BlockDescription from '../../blockDescriptionComponents/BlockDescription';
import BlockAbout from '../../blockAboutComponents/BlockAbout';
import AllServices from '../../blockServices/AllServices';
import UserAds from '../UserAds';
import UserReviews from '../UserReviews';
import UserFavorites from '../UserFavorites';

const UserAccount = () => {

    const [activeTab, setActiveTab] = useState('info');

    const renderTabContent = () => {
      switch (activeTab) {
        case 'info':
          return <UserInfoProfile />;
        case 'ads':
          return <UserAds />;
        case 'request':
          return<BlockDescription />;
        case 'transactions':
          return<BlockAbout />;
        case 'reviews':
          return<UserReviews />;
        case 'favorites':
          return<UserFavorites />;
        case 'notifications':
          return<AllServices />;
        default:
          return <AllServices />;
      }
    };

    return (
        <SSection>
            <SNav>
                <SUl>
                    <SLi selected={activeTab == 'info'} onClick={() => setActiveTab('info')}>Информация о пользователе</SLi>
                    <SLi selected={activeTab =='ads'} onClick={() => setActiveTab('ads')}>Мои объявления</SLi>
                    <SLi selected={activeTab =='request'} onClick={() => setActiveTab('request')}>Мои заявки</SLi>
                    <SLi selected={activeTab =='transactions'} onClick={() => setActiveTab('transactions')}>Мои сделки</SLi>
                    <SLi selected={activeTab == 'reviews'} onClick={() => setActiveTab('reviews')}>Мои отзывы</SLi>
                    <SLi selected={activeTab == 'favorites'} onClick={() => setActiveTab('favorites')}>Избранное</SLi>
                    <SLi selected={activeTab == 'notifications'} onClick={() => setActiveTab('notifications')}>Уведомления</SLi>
                </SUl>
            </SNav>

            <SDivContent>
                {renderTabContent()}
            </SDivContent>
            
        </SSection>
    );
  };

  export default UserAccount;