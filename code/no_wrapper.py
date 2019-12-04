import curses

stdscr = curses.initscr()
curses.curs_set(0)
curses.noecho()
curses.raw()

curses.start_color()
curses.use_default_colors()

stdscr.addstr("Hello world!")
stdscr.getch()

curses.endwin()
