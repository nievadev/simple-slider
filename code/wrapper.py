import curses

def main(stdscr):
    height, width = stdscr.getmaxyx()
    cursor = stdscr.getyx()
    
    stdscr.addstr("{} : {}".format(cursor[0], cursor[1]))

    key = stdscr.getch()

curses.wrapper(main)
