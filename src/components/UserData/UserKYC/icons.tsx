import { SvgIcon } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
import * as React from 'react';

export const icons = (name: string) => {
    switch (name) {
        case 'email':
            return (
                <SvgIcon viewBox="0 0 24 24">
                    <rect opacity="0.24" width="24" height="24" rx="12" fill="black" fillOpacity="0.87" />
                    <g opacity="0.8">
                        <path d="M13.2146 17H11.5604V9.00879L9.11992 9.84277V8.44141L13.0027 7.0127H13.2146V17Z" fill="white" />
                    </g>
                </SvgIcon>
            );
        case 'phone':
            return (
                <SvgIcon viewBox="0 0 24 24">
                    <rect opacity="0.24" width="24" height="24" rx="12" fill="black" fillOpacity="0.87" />
                    <g opacity="0.8">
                        <path d="M15.409 17H8.7166V15.8584L12.032 12.2422C12.5105 11.709 12.8501 11.2646 13.0506 10.9092C13.2557 10.5492 13.3582 10.1891 13.3582 9.8291C13.3582 9.35514 13.2238 8.97233 12.9549 8.68066C12.6906 8.389 12.3328 8.24316 11.8816 8.24316C11.3439 8.24316 10.9269 8.40723 10.6307 8.73535C10.3344 9.06348 10.1863 9.51237 10.1863 10.082H8.5252C8.5252 9.47591 8.66191 8.93132 8.93535 8.44824C9.21335 7.96061 9.60755 7.58236 10.118 7.31348C10.6329 7.0446 11.2254 6.91016 11.8953 6.91016C12.8615 6.91016 13.6225 7.15397 14.1785 7.6416C14.7391 8.12467 15.0193 8.7946 15.0193 9.65137C15.0193 10.1481 14.8781 10.6699 14.5955 11.2168C14.3175 11.7591 13.8595 12.3766 13.2215 13.0693L10.7879 15.6738H15.409V17Z" fill="white" />
                    </g>
                </SvgIcon>
            );
        case 'document':
            return (
                <SvgIcon viewBox="0 0 24 24">
                    <rect opacity="0.24" width="24" height="24" rx="12" fill="black" fillOpacity="0.87" />
                    <g opacity="0.8">
                        <path d="M10.6375 11.2646H11.6492C12.1596 11.2601 12.563 11.1279 12.8592 10.8682C13.16 10.6084 13.3104 10.2324 13.3104 9.74023C13.3104 9.26628 13.185 8.89941 12.9344 8.63965C12.6883 8.37533 12.31 8.24316 11.7996 8.24316C11.353 8.24316 10.9861 8.37305 10.699 8.63281C10.4119 8.88802 10.2684 9.22298 10.2684 9.6377H8.60723C8.60723 9.12728 8.74167 8.66243 9.01055 8.24316C9.28398 7.82389 9.66224 7.49805 10.1453 7.26562C10.6329 7.02865 11.1775 6.91016 11.7791 6.91016C12.7726 6.91016 13.5519 7.16081 14.117 7.66211C14.6867 8.15885 14.9715 8.85156 14.9715 9.74023C14.9715 10.1868 14.8279 10.6084 14.5408 11.0049C14.2583 11.3968 13.8914 11.693 13.4402 11.8936C13.9871 12.0804 14.4018 12.3743 14.6844 12.7754C14.9715 13.1764 15.115 13.6549 15.115 14.2109C15.115 15.1042 14.8074 15.8151 14.1922 16.3438C13.5815 16.8724 12.7771 17.1367 11.7791 17.1367C10.8221 17.1367 10.0382 16.8815 9.42754 16.3711C8.81686 15.8607 8.51152 15.1816 8.51152 14.334H10.1727C10.1727 14.7715 10.3185 15.127 10.6102 15.4004C10.9064 15.6738 11.3029 15.8105 11.7996 15.8105C12.3146 15.8105 12.7202 15.6738 13.0164 15.4004C13.3126 15.127 13.4607 14.7305 13.4607 14.2109C13.4607 13.6868 13.3058 13.2835 12.9959 13.001C12.686 12.7184 12.2257 12.5771 11.615 12.5771H10.6375V11.2646Z" fill="white" />
                    </g>
                </SvgIcon>
            );
        case 'success':
            return (
                <CheckCircle style={{ color: '#00A41A', height: 28, width: 28}} />
            );
        default:
            return(
                <SvgIcon />
            );
    }
};
