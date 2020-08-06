import {setInitialSettings} from 'app/store/actions/fuse'; //setDefaultSettings, 
import _ from '@lodash';
import store from 'app/store';
import * as Actions from 'app/store/actions';
import jwtService from 'app/services/jwtService';
import api from 'app/ApiConfig.js';
import history from 'history.js';

export const SET_USER_DATA = '[USER] SET DATA';
export const REMOVE_USER_DATA = '[USER] REMOVE DATA';
export const USER_LOGGED_OUT = '[USER] LOGGED OUT';
export const SEND_PW_EMAIL = '[USER] SEND PW EMAIL';
export const SET_FORGOT_PWD = '[USER] SET FORGOT PWD';


//apolo
export const SET_USER_BALANCE = '[USER] SET BALANCE'
export const SET_USER_BONUS ='[USER] SET BONUS'
export const SET_USER_APPLYSUBMITTED ='[USER] SET APPLYSUBMITTED'

/**
 * Set User Data
 */
export function setUserData(user)
{
    return (dispatch) => {

        /*
        Set User Settings
         */
        //dispatch(setDefaultSettings(user.data.settings));

        /*
        Set User Data
         */
        dispatch({
            type   : SET_USER_DATA,
            payload: user
        })
    }
}
/**
 * 
 */
export function setUserBalance(balance)
{
    
    return (dispatch)=>{
        dispatch({
            type    :   SET_USER_BALANCE,
            data    :   balance
        })
    }
}
export function setUserBonus(bonus)
{
    
    return (dispatch)=>{
        dispatch({
            type    :   SET_USER_BONUS,
            data    :   bonus
        })
    }
}
export function setApplySubmitted(submitted)
{
    console.log("Hi")

    return (dispatch)=>{
        dispatch({
            type    :   SET_USER_APPLYSUBMITTED,
            data    :   submitted
        })
    }
}
/*
 */
/**
 * Update User Settings
 */
export function updateUserSettings(settings)
{
    return (dispatch, getState) => {
        const oldUser = getState().auth.user;
        const user = _.merge({}, oldUser, {data: {settings}});

        updateUserData(user);

        return dispatch(setUserData(user));
    }
}

/**
 * Update User Shortcuts
 */
export function updateUserShortcuts(shortcuts)
{
    return (dispatch, getState) => {
        const user = getState().auth.user;
        const newUser = {
            ...user,
            ...shortcuts
        };

        updateUserData(newUser);

        return dispatch(setUserData(newUser));
    }
}

/**
 * Remove User Data
 */
export function removeUserData()
{
    return {
        type: REMOVE_USER_DATA
    }
}

/**
 * Logout
 */
export function logoutUser()
{

    return (dispatch, getState) => {
        const user = getState().auth.user;
        if ( user.role === 'guest' )
        {
            console.log("role is guest");
            return null;
        }
        
        history.push({
			pathname: '/'
		});

        jwtService.logout();

        dispatch(setInitialSettings());

        dispatch({
            type: USER_LOGGED_OUT
        })
    }
}

/**
 * Update User Data
 */
function updateUserData(user)
{
    if ( user.role === 'guest' )
    {
        return;
    }

    jwtService.updateUserData(user)
        .then(() => {
            store.dispatch(Actions.showMessage({message: "User data saved."}));
        })
        .catch(error => {
            store.dispatch(Actions.showMessage({message: error.message}));
        });
}

export function sendPwEmail(email)
{
    return (dispatch, getState) => {
        const request = api.post('/auth/send-pw-email', {
            email
        })
        request.then((response) => {            
            dispatch({
                type: SEND_PW_EMAIL
            })
        });
    }
}

export function setForgotPw(data)
{
    return (dispatch, getState) => {
        const request = api.post('/auth/set-forgotten-pw', {
            data
        })
        request.then((response) => {
            Actions.showMessage({message: 'Your password has been set successfully!'});
            history.push({
                pathname: '/login'
            });
            dispatch({
                type: SET_FORGOT_PWD
            })
        });
    }
}