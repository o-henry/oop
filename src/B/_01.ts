/**
 * 0. 2개 미만은 멸종
 * 1. live next generation = 상·하·좌·우·대각 에 black(live cell)을 찾고 2-3개 존재하면 다음 세대에 존재
 * 2. 3개 초과일경우 멸종(과밀)
 * 3. 죽은세포 기준 3개가 존재할경우 부활
 *
 * world(map)
 * find neighbor by position
 * cell = living | dead
 * living = black
 * dead = white
 */

enum COLOR {
    BLACK = "LIVE",
    WHITE = "DEAD",
}

class World {
    public set_living_at(x: number, y: number /* interface Point */) {
        // ...
    }

    public alive_at(x: number, y: number) {}

    public generate_world() {}
}

class Cell {
    constructor(private location: Location) {
        this.location = location;
    }

    // public neighbors_of(location: Location) { }

    /* handle unknown */
    public alive_in_next_generation(): boolean | unknown {
        return;
    }
}

class Location {
    constructor(
        private x: number,
        private y: number /* Location 통해 표현력·응집력을 증가 시킬 수 있다. */
    ) {
        this.x = x;
        this.y = y;
    }

    /* dfs | bfs */
    public neighbors() {
        // caculate a list of location
        // that are considered neighbors
    }
}

class LiveCell {
    /* instacne  | property */
    constructor(location: Location) {}
}

class DeadCell {
    constructor(private x: number, private y: number) {
        this.x = x;
        this.y = y;
    }
}
