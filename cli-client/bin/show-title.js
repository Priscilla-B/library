import chalk  from 'chalk';
import boxen from 'boxen';

/**
 * @desc    Show command title and subtitle
 * 
 * @param   {string} subtitle

 *
 
 */


export function showTitle(subtitle) {

    const title = chalk.white.bold(`Library: Your Simple Book Management System`);
    
    const titleOptions = {
     padding: 1,
     margin: 1,
     borderStyle: "round",
     borderColor: "green",
     backgroundColor: "#555555"
    };
    const titleBox = boxen( title, titleOptions );
    
    console.log(titleBox);
    
    const subtitleOptions = {
      margin: 1,
      borderStyle: "round",
      borderColor: "blue",
     };
    
    
    const subtitleBox = boxen( subtitle, subtitleOptions );
    
    console.log(subtitleBox);
    
}