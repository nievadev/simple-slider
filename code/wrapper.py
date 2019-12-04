import curses

def main(stdscr):
    curses.init_pair(1, curses.COLOR_WHITE, curses.COLOR_BLACK)
    stdscr.addstr("Hello world!", curses.color_pair(1))
    stdscr.getch()

curses.wrapper(main)
