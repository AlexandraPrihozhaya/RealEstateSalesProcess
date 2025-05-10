import React, { useEffect, useState } from "react";
import { updateNotification  } from "../../utils/ApiFunctions";
import { ModalOverlay, ModalContent, CloseButton, StyledSwiperPagination,
    SImg, CustomPrevButton, CustomNextButton, SCardContent, SCardDetails, SCardPrice, SCardTitle, SP,
    SDiv } from './styled';

const ModalNotification = ({onClose, notification}) => {

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleUpdate = async (notificationId, status) => {
        try {
            const result = await updateNotification(notificationId, status);
            if (result !== "Notification updated successfully") {
                console.error(`Error updating notification: ${result.message}`);
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
        setTimeout(() => {
            setSuccessMessage("");
            setErrorMessage("");
        }, 3000);
    }

    return (
        <ModalOverlay>
            <ModalContent >
                <CloseButton onClick={() => {
                    handleUpdate(notification.id, true);
                    onClose();
                }}>&times;</CloseButton>
                <SCardContent>
                    <SDiv>
                        <SCardTitle>{notification.name}</SCardTitle>
                        <SP>{notification.notificationDate[3]}:{notification.notificationDate[4]} {notification.notificationDate[2]}.{notification.notificationDate[1]}.{notification.notificationDate[0]}</SP>
                    </SDiv>
                    <SP>{notification.notification}</SP>
                </SCardContent>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ModalNotification;