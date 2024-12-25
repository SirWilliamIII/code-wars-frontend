import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Timer, Users, Code, Award, Skull, Swords } from 'lucide-react';

const CodeBattleArena = () => {
  const [timeLeft, setTimeLeft] = useState(300);
  const [playerCode, setPlayerCode] = useState('');
  const [opponents, setOpponents] = useState([
    { id: 1, name: 'DeathCoder', progress: 65, status: 'attacking', kills: 5 },
    { id: 2, name: 'ByteSlayer', progress: 45, status: 'defending', kills: 3 },
    { id: 3, name: 'CodeAssassin', progress: 30, status: 'attacking', kills: 4 }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 bg-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Battle Stats */}
        <Card className="md:col-span-3 bg-zinc-800 border-red-600 border-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-red-500">
              <span className="flex items-center gap-2">
                <Swords className="w-6 h-6" />
                BATTLE ARENA: ALGORITHM WARFARE
              </span>
              <span className="flex items-center gap-2 animate-pulse">
                <Timer className="w-6 h-6" />
                {formatTime(timeLeft)}
              </span>
            </CardTitle>
          </CardHeader>
        </Card>

        {/* Code Editor */}
        <Card className="md:col-span-2 bg-zinc-800 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-red-500 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Combat Zone
            </CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              className="w-full h-96 p-4 font-mono bg-zinc-950 text-green-500 border border-zinc-700 rounded focus:border-red-500 focus:ring-1 focus:ring-red-500"
              value={playerCode}
              onChange={(e) => setPlayerCode(e.target.value)}
              placeholder="Deploy your code strategy here..."
            />
          </CardContent>
        </Card>

        {/* Opponents Panel */}
        <Card className="bg-zinc-800 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-red-500 flex items-center gap-2">
              <Skull className="w-6 h-6" />
              Enemy Forces
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {opponents.map((opponent) => (
                <div key={opponent.id} className="p-4 bg-zinc-900 rounded border border-zinc-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-red-400">{opponent.name}</span>
                    <span className="text-sm text-zinc-400 flex items-center gap-1">
                      <Skull className="w-4 h-4" />
                      {opponent.kills}
                    </span>
                  </div>
                  <div className="w-full bg-zinc-700 rounded-full h-2.5">
                    <div
                      className="bg-red-600 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${opponent.progress}%` }}
                    ></div>
                  </div>
                  <div className="mt-2 text-xs text-zinc-500">
                    Status: <span className="text-red-400">{opponent.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Battle Stats */}
        <Card className="md:col-span-3 bg-zinc-800 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-red-500 flex items-center gap-2">
              <Award className="w-6 h-6" />
              Battle Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-zinc-900 rounded border border-zinc-700">
                <div className="text-2xl font-bold text-red-400">4/10</div>
                <div className="text-sm text-zinc-500">Tests Conquered</div>
              </div>
              <div className="p-4 bg-zinc-900 rounded border border-zinc-700">
                <div className="text-2xl font-bold text-red-400">65%</div>
                <div className="text-sm text-zinc-500">Code Coverage</div>
              </div>
              <div className="p-4 bg-zinc-900 rounded border border-zinc-700">
                <div className="text-2xl font-bold text-red-400">O(n²)</div>
                <div className="text-sm text-zinc-500">Battle Efficiency</div>
              </div>
              <div className="p-4 bg-zinc-900 rounded border border-zinc-700">
                <div className="text-2xl font-bold text-red-400">2nd</div>
                <div className="text-sm text-zinc-500">Current Rank</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CodeBattleArena;