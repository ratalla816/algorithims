
#include <iostream>
#include <string>
#include <map>
#include <initializer_list>

using std::cout; using std::endl;
using std::string; using std::cin;
using std::map;

constexpr int COUNT = 100;

class FizzBuzz {
    map<int, string> table;
public:
    FizzBuzz(std::initializer_list<std::pair<int, string>> init) {
        for (const auto &item : init) {
            table.insert(item);
        }
    }

    void checkFizzBuzz() {
        for (int i = 1; i <= COUNT; ++i) {
            for (const auto &item : table) {
                i % item.first == 0 ?
                cout << item.second << ", " :
                cout << i << ", ";
                break;
            }
        }
    }
};

int main(){
    FizzBuzz fii = {{3, "Fizz"},
                    {5, "Buzz"},
                    {15, "FizzBuzz"}};

    fii.checkFizzBuzz();

    return EXIT_SUCCESS;
}