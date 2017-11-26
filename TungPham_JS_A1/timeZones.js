/*
   JavaScript & AJAX Assignment 01
   Developed By: Thanh-Tung Pham
   Developed Date: Nov 25, 2017

   Function List:
   addTime(oldTime, milliseconds)
      Used to add a specified number of milliseconds to a date object named oldtime.
      A new date object with the new time value is returned by the function.

   showTime(time)
      Displays a time value in the format:
      hh:mm AM/PM
*/

/**
 *
 * @param {any} oldTime
 * @param {any} milliseconds
 */
function addTime(oldTime, milliseconds) {
    // Declare and Initialize variables
    var newTime = new Date();
    var newValue = oldTime.getTime() + milliseconds;
    // Processing
    newTime.setTime(newValue);

    return newTime;
}

/**
 *
 * @param {any} time
 */
function showTime(time) {
   // Declaration and Initialization
    var hour = time.getHours();
    var minute = time.getMinutes();
    var hourDisplay = (hour > 12) ? hour - 12 : hour;
    var minuteDisplay = (minute < 10) ? "0" + minute : "" + minute;
    var timeDisplay = hourDisplay + ":" + minuteDisplay;
    // Processing
    timeDisplay += (hour >= 12) ? " PM" : " AM";

    return timeDisplay;
}