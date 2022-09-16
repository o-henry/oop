def test_a_new_world_is_empty
    world = World.new
    assert_equal 0, world.living_cells.count # cell을 직접 세늩 코드
end

def test_a_new_world_is_empty_refactoring 
    world = World.new
    assert_true world.empty? # encapsulation and 메서드 명과의 대칭된 테스트 코드
end

def test_a_cell_can_be_added_to_the_world
    world = World.new
    world.set_living_at(1, 1)
    assert_equal 1, world.living_cells.count
end

def test_a_cell_can_be_added_to_the_world_refactoring
    world = World.new
    world.set_living_at(1, 1)
    assert_true world.alive_at?(1, 1) # encapsulation
end

def test_after_adding_a_cell_the_world_is_not_empty
    world = World.new
    world.set_living_at(1, 1)
    assert_false world.empty?
end

def test_a_world_starts_out_empty
    world = World.new
    assert_true world.empty?
end