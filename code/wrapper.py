import curses

def main(stdscr):
    height, width = stdscr.getmaxyx()
    cursor = stdscr.getyx()

    key = stdscr.getch()

curses.wrapper(main)
